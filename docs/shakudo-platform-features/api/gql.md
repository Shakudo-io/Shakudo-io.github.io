---
sidebar_position: 7
---

# GraphQL

Submit a GraphQL query using `graphql_operations()` function.

Example for submitting a job
```python
gql_query = '''    
  mutation {
      createShakudoPipelineJob(
          jobName: "unruffled_ardinghelli",
          jobType: "basic",
          timeout: 1800,
          activeTimeout: 1800,
          maxRetries: 2,
          pipelineYamlPath: "yaml_path.yaml",
          defaultCommands: true,
          gitInit: true,
          commitId: "",
          branchName: "",
          parameters: { create: [
            { key: "a", value: "1" },
              ]}  
      ) {
          id
          jobName
          schedule
          parameters {
              key
              value
          }
          noGitInit
          noHyperplaneCommands
      }
  }
  '''
  gql_queries = [gql_query]
  results = await nc.graphql_operation(gql_queries)
```

** Parameters **

| Name                                                         | Type                  | Description    |
| :------------------------------------------------------------| :---------------------| :----------------------------------- |
| gql_queries <div class="label basic required">Required</div> | Union[str, List[str]] | GraphQL query for relevant operation |
