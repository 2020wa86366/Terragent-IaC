module "rg" {
  source   = "../modules/RGs"
  name     = var.rg_name
  location = var.location
  tags     = var.tags
}

