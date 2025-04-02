module "rg" {
  source   = "./modules/RGs"
  name     = var.rg_name
  location = var.rg_location
}

module "vnet" {
  source              = "./modules/VNETs"
  resource_group_name = module.rg.name
  name                = var.vnet_name
  location            = var.rg_location
  address_space       = var.address_space
  depends_on          = [module.rg]
}
module "ingress-appgw" {
  source              = "./modules/Ingress-AppGW"
  resource_group_name = module.rg.name
  address_space       = var.address_space
  location            = var.rg_location
  vnet                = module.vnet.name
  subnet              = module.vnet.subnet_id
  ingress-appgw       = var.ingress-appgw
  depends_on          = [module.rg, module.vnet]
}