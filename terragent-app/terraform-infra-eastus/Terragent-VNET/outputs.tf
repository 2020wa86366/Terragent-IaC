output "virtual_network_name" {
  description = "The name of the virtual network"
  value       = module.vnet.virtual_network_name
}

output "virtual_network_id" {
  description = "The ID of the virtual network"
  value       = module.vnet.virtual_network_id
}