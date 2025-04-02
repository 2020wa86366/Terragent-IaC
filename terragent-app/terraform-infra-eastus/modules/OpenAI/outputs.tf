output "openai_resource_name" {
  description = "The name of the OpenAI resource"
  value       = azurerm_cognitive_account.openai.name
}

output "openai_resource_id" {
  description = "The ID of the OpenAI resource"
  value       = azurerm_cognitive_account.openai.id
}