variable "name" {
  description = "The name of the OpenAI resource"
  type        = string
}

variable "kind" {
  description = "The kind of the OpenAI resource"
  type        = string
}

variable "sku_name" {
  description = "The SKU name for the OpenAI resource"
  type        = string
}

variable "location" {
  description = "The location of the resource group"
  type        = string
}

variable "tags" {
  description = "The tags to apply to the resource group"
  type        = map(string)
  default     = {}
}

variable "resource_group_name" {
  type = string
}