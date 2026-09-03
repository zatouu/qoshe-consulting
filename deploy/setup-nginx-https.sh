#!/bin/bash
set -e

DOMAIN="qosheconsulting.com"
APP_DIR="$HOME/qoshe-consulting"
NGINX_CONF_NAME="qoshe"

echo "=== Configuration Nginx + HTTPS pour $DOMAIN ==="

# 1. Copier la config Nginx
echo "→ Installation de la config Nginx..."
sudo cp "$APP_DIR/deploy/nginx-qoshe.conf" "/etc/nginx/sites-available/$NGINX_CONF_NAME"
sudo ln -sf "/etc/nginx/sites-available/$NGINX_CONF_NAME" "/etc/nginx/sites-enabled/$NGINX_CONF_NAME"

# 2. Tester la config Nginx
echo "→ Test de la config Nginx..."
sudo nginx -t

# 3. Recharger Nginx
echo "→ Rechargement de Nginx..."
sudo systemctl reload nginx

# 4. Installer certbot si absent
if ! command -v certbot >/dev/null 2>&1; then
  echo "→ Installation de certbot..."
  sudo apt-get update -qq
  sudo apt-get install -y -qq certbot python3-certbot-nginx
fi

# 5. Obtenir le certificat SSL
echo "→ Obtention du certificat SSL via Let's Encrypt..."
sudo certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" \
  --non-interactive --agree-tos \
  --email contact@qosheconsulting.com \
  --redirect

# 6. Vérifier le renouvellement automatique
echo "→ Test du renouvellement automatique..."
sudo certbot renew --dry-run

echo ""
echo "=== Configuration terminée ! ==="
echo "Site accessible sur : https://$DOMAIN"
