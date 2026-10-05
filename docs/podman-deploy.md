# Déploiement avec Podman + Quadlet

## Prérequis

- Podman installé sur la VM
- Travailler en tant qu'utilisateur `podman` :

  ```bash
  sudo machinectl shell --uid podman
  ```

- Accès au répertoire `/home/podman/.config/containers/systemd/`

## 1. Cloner le dépôt

```bash
git clone git@github.com:unifr-dit-er/didanum-myple.git
cd didanum-myple
```

## 2. Déployer le fichier Quadlet

Le fichier [deploy/didanum-myple.container](../deploy/didanum-myple.container)
ne contient aucun secret : il est versionné tel quel. Il expose l'application
sur `127.0.0.1:8082`, derrière nginx.

```bash
cp deploy/didanum-myple.container /home/podman/.config/containers/systemd/
```

## 3. Builder l'image

L'image construit l'application au build et la sert par le serveur Nuxt,
sur le port 3000 du container.

```bash
podman build -t didanum-myple:latest .
```

## 4. Démarrer le service

```bash
systemctl --user daemon-reload
systemctl --user start didanum-myple.service
```

## Commandes utiles

```bash
# Voir les logs
podman logs -f didanum-myple

# Statut du service
systemctl --user status didanum-myple.service

# Images présentes sur la VM
podman images | grep -v "<none>"

# Services actifs
systemctl --user --type=service --state=running
```

Pour une nouvelle version : [podman-update.md](podman-update.md).
