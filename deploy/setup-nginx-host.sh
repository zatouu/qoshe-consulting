#!/bin/bash
# Run ON THE EC2 HOST (not inside Docker)
# Sets up nginx reverse proxy for qosheconsulting.com → Docker container on :8080
set -e

CONF_SRC="./deploy/qoshe.conf"
NGINX_AVAILABLE="/etc/nginx/sites-available/qoshe.conf"
NGINX_ENABLED="/etc/nginx/sites-enabled/qoshe.conf"

echo "=== Setting up nginx host config for QOSHE ==="

# Copy config
sudo cp "$CONF_SRC" "$NGINX_AVAILABLE"

# Enable site
if [ ! -L "$NGINX_ENABLED" ]; then
    sudo ln -s "$NGINX_AVAILABLE" "$NGINX_ENABLED"
fi

# Test & reload
sudo nginx -t
sudo systemctl reload nginx

echo "=== Nginx config installed. qosheconsulting.com → http://127.0.0.1:8080 ==="
