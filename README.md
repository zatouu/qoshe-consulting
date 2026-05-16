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

## Deploy to EC2 (Docker)

1. **Create a GitHub repo** and push this code:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/qoshe-consulting.git
   git push -u origin main
   ```

2. **SSH to your EC2 instance** and run:

   ```bash
   # Setup (once)
   curl -sL https://raw.githubusercontent.com/YOUR_USERNAME/qoshe-consulting/main/deploy/setup-ec2.sh | bash

   # Deploy (after each push)
   curl -sL https://raw.githubusercontent.com/YOUR_USERNAME/qoshe-consulting/main/deploy/deploy.sh | bash
   ```

   Or clone manually and run `docker-compose up --build -d`.

3. **Open** `http://YOUR_EC2_IP`.

## License

© QOSHE Consulting — Tous droits réservés.
