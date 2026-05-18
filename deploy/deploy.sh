#!/bin/bash
# Deploy QOSHE on EC2 (with existing nginx on port 80)
set -e

REPO_URL="https://github.com/zatouu/qoshe-consulting.git"
APP_DIR="$HOME/qoshe-consulting"

echo "=== Deploying QOSHE Consulting ==="

# Clone or pull
if [ -d "$APP_DIR/.git" ]; then
  cd "$APP_DIR"
  git pull origin main
else
  git clone "$REPO_URL" "$APP_DIR"
  cd "$APP_DIR"
fi

# Build & run Docker container on localhost:8080
docker-compose down
docker-compose up --build -d

# (Optional) update nginx host config if changed
if [ -f "deploy/setup-nginx-host.sh" ]; then
  bash deploy/setup-nginx-host.sh
fi

echo "=== Deployed. Container on :8080 | Public via nginx at http://qosheconsulting.com ==="
