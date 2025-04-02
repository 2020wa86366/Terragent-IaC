variable "rg_name" {
  description = "The name of the resource group"
  type        = string
  default     = "Terragent-AI-Web-App"
}

variable "rg_location" {
  description = "The location of the resource group"
  type        = string
  default     = "westus"
}

variable "tags" {
  description = "The tags to apply to the resource group"
  type        = map(string)
  default = {
    Classification = "Dev"
    Owner          = "Terragent"
    Created-by     = "IAC"
  }
}

variable "vnet_name" {
  description = "The name of the virtual network"
  type        = string
  default     = "sample-vnet"
}

variable "address_space" {
  description = "The address space that is used by the virtual network"
  type        = list(string)
  default     = ["10.1.0.0/16"]
}


variable "ingress-appgw" {
  description = "Name for the ingress application gateway"
  type        = string
  default     = "wus-ingress-appgw"
}