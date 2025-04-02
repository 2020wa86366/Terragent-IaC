variable "ingress-appgw" {
  description = "Name for the ingress application gateway"
  type        = string
}

variable "location" {
  description = "The location of the virtual network"
  type        = string
}

variable "resource_group_name" {
  description = "The name of the resource group in which to create the virtual network"
  type        = string
}

variable "tags" {
  description = "A mapping of tags to assign to the virtual network"
  type        = map(string)
  default     = {}
}

variable "vnet" {
  description = "The name of the virtual network"
  type        = string
}

variable "address_space" {
  description = "The address space that is used by the virtual network"
  type        = list(string)
}



