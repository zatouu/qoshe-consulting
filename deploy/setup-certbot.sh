#!/bin/bash
# Run ON THE EC2 HOST — installs Certbot + obtains Let's Encrypt certificate
# Pre-requisite: nginx host config must already exist (run setup-nginx-host.sh first)
set -e

DOMAIN="qosheconsulting.com"
EMAIL="${1:-dev@qoshe-consulting.com}"

echo "=== Installing Certbot for $DOMAIN ==="

# Install certbot with nginx plugin
sudo apt-get update -y
sudo apt-get install -y certbot python3-certbot-nginx

# Ensure nginx host config is installed
if [ ! -f "/etc/nginx/sites-enabled/qoshe.conf" ]; then
  echo "Installing nginx host config first..."
  bash "$(dirname "$0")/setup-nginx-host.sh"
fi

# Obtain certificate (certbot auto-edits nginx to enable SSL + HTTP→HTTPS redirect)
echo "=== Requesting SSL certificate from Let's Encrypt ==="
sudo certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" \
  --agree-tos --non-interactive --email "$EMAIL" \
  --redirect

# Enable auto-renew timer (Ubuntu/Debian)
echo "=== Enabling auto-renew ==="
sudo systemctl enable certbot.timer 2>/dev/null || true
sudo systemctl start certbot.timer 2>/dev/null || true
sudo certbot renew --dry-run

echo "=== HTTPS ready at https://$DOMAIN ==="
