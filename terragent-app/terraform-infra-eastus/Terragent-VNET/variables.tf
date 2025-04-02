variable "vnet_name" {
  description = "The name of the virtual network"
  type        = string
  default     = "terragent-vnet"
}

variable "vnet_address_space" {
  description = "The address space for the virtual network"
  type        = list(string)
  default     = ["10.1.0.0/16"]
}

// Define other variables as needed for the modules
