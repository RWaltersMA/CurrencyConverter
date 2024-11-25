# Run rover dev. Replace ... with your own values

```sh
APOLLO_KEY="service:Currency-02wxjh:y9HYcKSOyKPdxrCIiE4qcw" \
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


APOLLO_KEY=service:Currency-02wxjh:y9HYcKSOyKPdxrCIiE4qcw \
  rover subgraph publish Currency-02wxjh@current \
  --schema ./currency.graphql \
  --name currency \
  --routing-url http://products.prod.svc.cluster.local:4001/graphql

  rover subgraph introspect \
  http://localhost:4001 | \
  APOLLO_KEY=service:Currency-02wxjh:y9HYcKSOyKPdxrCIiE4qcw \
  rover subgraph publish Currency-02wxjh@current \
  --name currency \
  --schema - \
  --routing-url http://products.svc.cluster.local:4001/graphql