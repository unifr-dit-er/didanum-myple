# Mise à jour de l'application

En tant qu'utilisateur `podman` (`sudo machinectl shell --uid podman`), dans
le dossier du dépôt.

## 1. Récupérer les dernières modifications

```bash
git pull
```

## 2. Rebuilder l'image

```bash
podman build -t didanum-myple:latest .
```

## 3. Redémarrer le service

Si `deploy/didanum-myple.container` a changé, le recopier d'abord dans
`/home/podman/.config/containers/systemd/` et lancer
`systemctl --user daemon-reload`.

```bash
systemctl --user restart didanum-myple.service
```

## Vérification

```bash
# Vérifier que le service tourne
systemctl --user status didanum-myple.service

# Consulter les logs
podman logs -f didanum-myple
```
