# Run rover dev. Replace ... with your own values

```sh
APOLLO_KEY="service:yyyyy:xxxxx" \
APOLLO_GRAPH_REF="Currency-02wxjh@current" \
APOLLO_ROVER_DEV_ROUTER_VERSION=2.0.0-preview.0 \
rover dev --supergraph-config supergraph.yaml --router-config router-config.yaml
```

```powershell
$env:APOLLO_KEY="..."
$env:APOLLO_GRAPH_REF="..."
$env:APOLLO_ROVER_DEV_ROUTER_VERSION="2.0.0-preview.0"
rover dev --supergraph-config supergraph.yaml --router-config router-config.yaml
```
