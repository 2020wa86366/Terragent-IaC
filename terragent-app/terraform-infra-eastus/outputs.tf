output "subnet_id" {
  depends_on = [module.vnet]
  value      = module.vnet.subnet_id
}