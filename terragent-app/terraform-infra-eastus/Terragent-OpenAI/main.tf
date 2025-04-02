data "terraform_remote_state" "rgs_details" {
  backend = "azurerm"
  config = {
    resource_group_name  = "Lab45-AIPLT-AF-KV-SP-Dev"
    storage_account_name = "aipltiacartifactdev"
    container_name       = "tfstate-dev"
    key                  = "TerragentRG-demo.tfstate"
  }
}

module "openai" {
  source              = "../modules/OpenAI"
  name                = var.openai_name
  location            = data.terraform_remote_state.rgs_details.outputs.resource_group_location
  resource_group_name = data.terraform_remote_state.rgs_details.outputs.resource_group_name
  kind                = var.openai_kind
  sku_name            = var.openai_sku_name
  tags                = data.terraform_remote_state.rgs_details.outputs.resource_group_tags
  #depends_on          = [module.rg, ]
}
