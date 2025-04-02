data "terraform_remote_state" "rgs_details" {
  backend = "azurerm"
  config = {
    resource_group_name  = "Lab45-AIPLT-AF-KV-SP-Dev"
    storage_account_name = "aipltiacartifactdev"
    container_name       = "tfstate-dev"
    key                  = "TerragentRG-demo.tfstate"
  }
}
module "rg" {
  source   = "../modules/RGs"
  name     = var.rg_name
  location = var.location
  tags     = var.tags
}

