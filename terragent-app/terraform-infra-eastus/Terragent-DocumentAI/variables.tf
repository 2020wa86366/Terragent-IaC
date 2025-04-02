data "terraform_remote_state" "rgs_details" {
  backend = "azurerm"
  config = {
    resource_group_name  = "Lab45AI-AIPLT-SaaS-Staging-AF-KV-SP"
    storage_account_name = "aipltiacartifactstaging"
    container_name       = "tfstate-staging-centralus"
    key                  = "aiplt-staging-centralus-rgs.tfstate"
  }
}
variable "rg_name" {
  description = "The name of the resource group"
  type        = string
  default     = "Terragent-Demo-RG"
}

variable "location" {
  description = "The location for the resources"
  type        = string
  default     = "eastus"
}

variable "tags" {
  description = "The tags to apply to all resources"
  type        = map(string)
  default = {
    Classification = "Dev"
    Owner          = "Terragent"
    Created-by     = "IAC"
  }
}

// Define other variables as needed for the modules
