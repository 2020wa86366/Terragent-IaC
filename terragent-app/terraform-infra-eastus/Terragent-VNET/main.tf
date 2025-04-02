data "terraform_remote_state" "rgs_details" {
  backend = "azurerm"
  config = {
    resource_group_name  = "Lab45-AIPLT-AF-KV-SP-Dev"
    storage_account_name = "aipltiacartifactdev"
    container_name       = "tfstate-dev"
    key                  = "TerragentRG-demo.tfstate"
  }
}

module "vnet" {
  source              = "../modules/VNETs"
  name                = var.vnet_name
  address_space       = var.vnet_address_space
  location            = data.terraform_remote_state.rgs_details.outputs.resource_group_location
  resource_group_name = data.terraform_remote_state.rgs_details.outputs.resource_group_location
  tags                = data.terraform_remote_state.rgs_details.outputs.resource_group_tags
  #depends_on          = [module.rg, ]
}