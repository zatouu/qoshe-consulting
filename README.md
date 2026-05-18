# QOSHE Consulting

Site vitrine du cabinet QHSE QOSHE Consulting — Sénégal.

## Stack

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS
- **Language** : TypeScript
- **Icons** : Lucide React
- **Export** : Static (`next export`)

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build

```bash
npm run build
# output in ./dist/
```

## Theme

Day / Night toggle supported via CSS custom properties + Tailwind `darkMode: 'class'`.

## Deploy to EC2 (Docker + nginx reverse proxy + HTTPS)

> Architecture: host nginx (port 80/443) → Docker container (port 8080)

1. **SSH to your EC2 instance** and run:

   ```bash
   # 1. Clone
   git clone https://github.com/zatouu/qoshe-consulting.git
   cd qoshe-consulting

   # 2. Setup nginx host config (once)
   bash deploy/setup-nginx-host.sh

   # 3. Setup HTTPS with Certbot (once)
   bash deploy/setup-certbot.sh your-email@example.com

   # 4. Start container
   docker-compose up --build -d
   ```

2. **Redeploy** after each push:

   ```bash
   cd ~/qoshe-consulting
   bash deploy/deploy.sh
   ```

3. **Open** `https://qosheconsulting.com`.

## License

© QOSHE Consulting — Tous droits réservés.
