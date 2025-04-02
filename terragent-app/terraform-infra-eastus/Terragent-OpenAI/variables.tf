variable "openai_name" {
  description = "The name of the OpenAI resource"
  type        = string
  default     = "terragent-openai-s"
}

variable "openai_kind" {
  description = "The kind of the OpenAI resource"
  type        = string
  default     = "OpenAI"
}

variable "openai_sku_name" {
  description = "The SKU name for the OpenAI resource"
  type        = string
  default     = "S0"
}
