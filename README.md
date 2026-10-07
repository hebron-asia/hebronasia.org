# hebronasia.org

Public site for Hebron Asia Foundation. Hosted on GitHub Pages at [hebronasia.org](https://hebronasia.org).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Push to `main` deploys the static export. In the GitHub repo, set **Settings → Pages → Source** to **GitHub Actions**.

Point DNS at GitHub Pages:

- Apex `hebronasia.org`: `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www.hebronasia.org`: `CNAME` to `hebron-asia.github.io`
- Then set the custom domain to `hebronasia.org` in Pages settings and enable HTTPS
