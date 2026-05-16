#!/bin/bash
# Setup script for EC2 (Amazon Linux 2 / Ubuntu)
set -e

echo "=== QOSHE EC2 Setup ==="

# Update & install deps
sudo apt-get update -y
sudo apt-get install -y docker.io docker-compose git nginx

# Enable & start Docker
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER

echo "=== Done. Log out and back in, then run deploy.sh ==="
