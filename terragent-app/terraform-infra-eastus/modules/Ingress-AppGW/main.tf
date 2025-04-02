
resource "azurerm_application_gateway" "ingress-appgw" {
  enable_http2        = true
  location            = azurerm_resource_group.rg.location
  name                = var.ingress-appgw
  resource_group_name = var.resource_group_name
  tags                = var.tags
  zones               = ["1", "2", "3"]
  backend_address_pool {
    name = "default"
  }
  backend_http_settings {
    affinity_cookie_name  = "ApplicationGatewayAffinity"
    cookie_based_affinity = "Disabled"
    name                  = "default"
    port                  = 80
    protocol              = "Http"
    request_timeout       = 20
  }
  frontend_ip_configuration {
    name                          = "appGwPrivateFrontendIpIPv4"
    private_ip_address_allocation = "Static"
    private_ip_address            = "10.225.0.10"
    subnet_id                     = 
  }
  frontend_port {
    name = "port_443"
    port = 443
  }
  frontend_port {
    name = "port_80"
    port = 80
  }
  gateway_ip_configuration {
    name      = "appGatewayIpConfig"
    subnet_id = var.subnet
  }
  http_listener {
    frontend_ip_configuration_name = "appGwPrivateFrontendIpIPv4"
    frontend_port_name             = "port_443"
    host_names                     = ["testsetapi.lab45.ai"]
    name                           = "sample"
    protocol                       = "Https"
    require_sni                    = true
    ssl_certificate_name           = "ai360-lab45ai-cert"
  }
  http_listener {
    frontend_ip_configuration_name = "appGwPrivateFrontendIpIPv4"
    frontend_port_name             = "port_80"
    name                           = "default"
    protocol                       = "Http"
  }
  identity {
    identity_ids = ["/subscriptions/6e1c147d-e3fa-4db8-923d-bb81a6ac3acf/resourcegroups/AI360-Dev-AI-Infra/providers/Microsoft.ManagedIdentity/userAssignedIdentities/Lab45PltIntegTestUAManagedId"]
    type         = "UserAssigned"
  }
  request_routing_rule {
    backend_address_pool_name  = "default"
    backend_http_settings_name = "default"
    http_listener_name         = "default"
    name                       = "default"
    priority                   = 19000
    rule_type                  = "Basic"
  }
  sku {
    capacity = 2
    name     = "Standard_v2"
    tier     = "Standard_v2"
  }
  /*ssl_certificate {
    key_vault_secret_id = "https://pltintegtestdevkv.vault.azure.net/secrets/ai360-lab45ai-cert/1ad073ce388c4b1b931b19f8ca13c0c9"
    name                = "ai360-lab45ai-cert"
  }
  ssl_policy {
    policy_name = "AppGwSslPolicy20220101"
    policy_type = "Predefined"
  }*/
}