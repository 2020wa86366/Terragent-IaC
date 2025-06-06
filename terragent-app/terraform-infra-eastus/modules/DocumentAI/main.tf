resource "azurerm_cognitive_account" "documentai" {
  name                = var.name
  location            = var.location
  resource_group_name = var.resource_group_name
  kind                = var.kind
  sku_name            = var.sku_name
  tags                = var.tags
}