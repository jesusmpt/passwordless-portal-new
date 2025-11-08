Despliegue rÃ¡pido:

1. Crear repo en GitHub y subir este proyecto.
2. En Azure Portal crear Static Web App y conectar al repo/branch main (Azure generarÃ¡ el workflow y secreto AZURE_STATIC_WEB_APPS_API_TOKEN).
3. Configurar Application Settings del Function App (GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET).
4. Registrar app en Entra ID y otorgar permisos a Graph (AuthenticationMethod.ReadWrite.All o mÃ­nimo).
5. Push a main -> GitHub Actions construirÃ¡ y desplegarÃ¡.
6. Revisar logs y probar con usuarios de la organizaciÃ³n.
