terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.11.0"
    }
  }
}
provider "azurerm" {
  features {}
}

terraform {
  backend "azurerm" {
    resource_group_name  = "IaC-state-Dev"
    storage_account_name = "iacartifactdev"
    container_name       = "tfstate-dev"
    key                  = "TerragentVNET-demo.tfstate"
  }

}