#!/bin/bash
# Deploy QOSHE on EC2
set -e

REPO_URL="https://github.com/YOUR_USERNAME/qoshe-consulting.git"
APP_DIR="~/qoshe-consulting"

echo "=== Deploying QOSHE Consulting ==="

# Clone or pull
if [ -d "$APP_DIR/.git" ]; then
  cd "$APP_DIR"
  git pull origin main
else
  git clone "$REPO_URL" "$APP_DIR"
  cd "$APP_DIR"
fi

# Build & run with Docker
docker-compose down
docker-compose up --build -d

echo "=== Deployed at http://$(curl -s ifconfig.me) ==="
