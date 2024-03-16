"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Getting Started","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Introduction","href":"/docs/","docId":"getting_started/introduction","unlisted":false},{"type":"link","label":"Configuration","href":"/docs/getting_started/configuration","docId":"getting_started/configuration","unlisted":false},{"type":"link","label":"Installation","href":"/docs/getting_started","docId":"getting_started/installation","unlisted":false},{"type":"link","label":"Launch","href":"/docs/getting_started/launch","docId":"getting_started/launch","unlisted":false},{"type":"link","label":"Execute","href":"/docs/getting_started/execute","docId":"getting_started/execute","unlisted":false}]},{"type":"category","label":"Guides","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Apollo Studio","href":"/docs/guides/apollo-studio","docId":"guides/apollo-studio","unlisted":false},{"type":"link","label":"CLI","href":"/docs/guides/cli","docId":"guides/cli","unlisted":false},{"type":"link","label":"Client Tuning","href":"/docs/guides/client-tuning","docId":"guides/client-tuning","unlisted":false},{"type":"link","label":"Configuration Format","href":"/docs/guides/configuration","docId":"guides/configuration","unlisted":false},{"type":"link","label":"Context Overview","href":"/docs/guides/context","docId":"guides/context","unlisted":false},{"type":"link","label":"Naming Conventions","href":"/docs/guides/conventions","docId":"guides/conventions","unlisted":false},{"type":"link","label":"Environment Variables","href":"/docs/guides/environment-variables","docId":"guides/environment-variables","unlisted":false},{"type":"link","label":"Sequencing & Parallelism","href":"/docs/guides/execution-strategy","docId":"guides/execution-strategy","unlisted":false},{"type":"link","label":"GraphQL on gRPC","href":"/docs/guides/grpc","docId":"guides/grpc","unlisted":false},{"type":"link","label":"Http Cache","href":"/docs/guides/http-cache","docId":"guides/http-cache","unlisted":false},{"type":"link","label":"HTTP Filters","href":"/docs/guides/http-filters","docId":"guides/http-filters","unlisted":false},{"type":"link","label":"Logging","href":"/docs/guides/logging","docId":"guides/logging","unlisted":false},{"type":"link","label":"N+1 Problem","href":"/docs/guides/n+1","docId":"guides/n+1","unlisted":false},{"type":"link","label":"Playground","href":"/docs/guides/playground","docId":"guides/playground","unlisted":false},{"type":"link","label":"Scalars","href":"/docs/guides/scalar","docId":"guides/scalar","unlisted":false},{"type":"link","label":"Tailcall on AWS","href":"/docs/guides/tailcall-on-aws","docId":"guides/tailcall-on-aws","unlisted":false},{"type":"link","label":"Watch Mode","href":"/docs/guides/watch-mode","docId":"guides/watch-mode","unlisted":false}]},{"type":"category","label":"Operators","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"@addField","href":"/docs/operators/add-field","docId":"operators/add-field","unlisted":false},{"type":"link","label":"@cache","href":"/docs/operators/cache","docId":"operators/cache","unlisted":false},{"type":"link","label":"@call","href":"/docs/operators/call","docId":"operators/call","unlisted":false},{"type":"link","label":"@const","href":"/docs/operators/const","docId":"operators/const","unlisted":false},{"type":"link","label":"@graphQL","href":"/docs/operators/graphql","docId":"operators/graphql","unlisted":false},{"type":"link","label":"@grpc","href":"/docs/operators/grpc","docId":"operators/grpc","unlisted":false},{"type":"link","label":"@http","href":"/docs/operators/http","docId":"operators/http","unlisted":false},{"type":"link","label":"@link","href":"/docs/operators/link","docId":"operators/link","unlisted":false},{"type":"link","label":"@modify","href":"/docs/operators/modify","docId":"operators/modify","unlisted":false},{"type":"link","label":"@omit","href":"/docs/operators/omit","docId":"operators/omit","unlisted":false},{"type":"link","label":"@server","href":"/docs/operators/server","docId":"operators/server","unlisted":false},{"type":"link","label":"@telemetry","href":"/docs/operators/telemetry","docId":"operators/telemetry","unlisted":false},{"type":"link","label":"@upstream","href":"/docs/operators/upstream","docId":"operators/upstream","unlisted":false}],"href":"/docs/operators/"}]},"docs":{"getting_started/configuration":{"id":"getting_started/configuration","title":"Configuration","description":"For our first example, we are going to compose a GraphQL schema from the REST APIs at https://jsonplaceholder.typicode.com, a free online REST API with some fake data.","sidebar":"tutorialSidebar"},"getting_started/execute":{"id":"getting_started/execute","title":"Execute","description":"1. Open a web browser and go to http8000. This should load the GraphiQL interface.","sidebar":"tutorialSidebar"},"getting_started/installation":{"id":"getting_started/installation","title":"Installation","description":"You can install the latest version -{\\" \\"}","sidebar":"tutorialSidebar"},"getting_started/introduction":{"id":"getting_started/introduction","title":"Introduction","description":"Good APIs craft a broad spectrum of functionalities. Yet, the broader their scope, the more they diverge from being the perfect fit for any specific use case. This fundamental discrepancy \u2014 the impedance mismatch between the general capabilities of an API and the precise needs of a particular scenario \u2014 amplifies the necessity for an orchestration layer. Such a layer adeptly bridges this gap, tailor-fitting generic APIs to meet exact requirements with finesse. Tailcall stands at the forefront of this innovation, seamlessly transforming the way APIs are integrated and interacted with.","sidebar":"tutorialSidebar"},"getting_started/launch":{"id":"getting_started/launch","title":"Launch","description":"Now, run the following command to start the server with the full path to the file that you created earlier.","sidebar":"tutorialSidebar"},"guides/apollo-studio":{"id":"guides/apollo-studio","title":"Apollo Studio","description":"Learn to enhance your GraphQL server\'s efficiency by integrating Tailcall with Apollo Studio through our concise guide. Discover how to configure Tailcall to send vital usage metrics to Apollo Studio, enabling advanced performance monitoring and optimization. Whether you\'re establishing a Monolith graph or improving an existing one, our instructions will facilitate a seamless integration. This guide helps you set up for better insights and also advises on leveraging Apollo Studio\'s features for a more responsive GraphQL server. Start optimizing today with our straightforward steps, and explore how to access Apollo Studio\'s free trial for new users.","sidebar":"tutorialSidebar"},"guides/cli":{"id":"guides/cli","title":"CLI","description":"The TailCall CLI (Command Line Interface) is an essential part of the TailCall toolkit. It allows developers to manage and optimize GraphQL configurations directly from the command line. Each command within the CLI handles a specific aspect of GraphQL composition. Below, you\'ll find a detailed overview of each command, along with its options and usage examples.","sidebar":"tutorialSidebar"},"guides/client-tuning":{"id":"guides/client-tuning","title":"Client Tuning","description":"Tuning client for performance","sidebar":"tutorialSidebar"},"guides/configuration":{"id":"guides/configuration","title":"Configuration Format","description":"Explore the seamless format conversion capabilities of the Tailcall CLI, which supports GraphQL, YAML, and JSON for configuration files. Tailored for developers, this documentation unveils how to effortlessly convert and manage configurations, leveraging GraphQL for its clear type definitions, and YAML and JSON for their ubiquity in tools and API integration, enhancing development and deployment workflows.","sidebar":"tutorialSidebar"},"guides/context":{"id":"guides/context","title":"Context Overview","description":"Explore Tailcall\'s dynamic Context mechanism for schema field resolution, enabling access to arguments, values, and environment variables for efficient GraphQL queries. Tailcall, GraphQL, Context, dynamic resolution, schema fields, environment variables, query arguments.","sidebar":"tutorialSidebar"},"guides/conventions":{"id":"guides/conventions","title":"Naming Conventions","description":"Enhance your understanding of naming and casing conventions for GraphQL schema to ensure clarity and consistency in your schema design using Tailcall.","sidebar":"tutorialSidebar"},"guides/environment-variables":{"id":"guides/environment-variables","title":"Environment Variables","description":"Environment variables are key-value pairs stored in our operating systems. Most of them come by default, and we can also create our own. They store information used by our operating system or other programs. For example, the PATH variable stores a list of directories the operating system searches when we run a command in the terminal. The HOME variable stores the path to our home directory.","sidebar":"tutorialSidebar"},"guides/execution-strategy":{"id":"guides/execution-strategy","title":"Sequencing & Parallelism","description":"Tailcall revolutionizes data access layer development by automating the orchestration of API calls, enabling optimal execution strategies for both sequencing and parallelism.","sidebar":"tutorialSidebar"},"guides/grpc":{"id":"guides/grpc","title":"GraphQL on gRPC","description":"Building a GraphQL API on top of gRPC endpoints.","sidebar":"tutorialSidebar"},"guides/http-cache":{"id":"guides/http-cache","title":"Http Cache","description":"A comprehensive guide to leverage HTTP cache for REST APIs using Tailcall","sidebar":"tutorialSidebar"},"guides/http-filters":{"id":"guides/http-filters","title":"HTTP Filters","description":"Modify upstream requests and responses using Javascript","sidebar":"tutorialSidebar"},"guides/logging":{"id":"guides/logging","title":"Logging","description":"Logging acts as an essential tool for obtaining insights into code execution and addressing software development challenges. You can configure the verbosity of logs via log levels. Use TAILCALLLOGLEVEL or TCLOGLEVEL environment variables to set the application\'s log level. The available log levels include:","sidebar":"tutorialSidebar"},"guides/n+1":{"id":"guides/n+1","title":"N+1 Problem","description":"Learn how to efficiently tackle the N+1 problem in application development, reducing server requests and optimizing performance. Discover practical solutions using the TailCall CLI for GraphQL applications, with step-by-step examples to enhance your coding practices.","sidebar":"tutorialSidebar"},"guides/playground":{"id":"guides/playground","title":"Playground","description":"Explore and test server configurations with @server directive\'s showcase feature in a controlled environment. Ideal for quick experimentation and learning with dynamic GraphQL schema configurations. Not recommended for production due to performance and security considerations.","sidebar":"tutorialSidebar"},"guides/scalar":{"id":"guides/scalar","title":"Scalars","description":"Explore GraphQL\'s core and Tailcall\'s custom scalars, including `Int`, `Float`, `String`, `Boolean`, `ID`, `Email`, and more, in our guide that simplifies data handling with clear definitions and examples. Enhance your applications with our comprehensive scalar support, designed for precise data validation and efficiency.","sidebar":"tutorialSidebar"},"guides/tailcall-on-aws":{"id":"guides/tailcall-on-aws","title":"Tailcall on AWS","description":"Deploy Tailcall on AWS effortlessly using the tailcall-on-aws template and Terraform. This guide covers everything from setting environment variables to configuring and updating your Tailcall deployment, complete with logging via AWS CloudWatch for comprehensive monitoring and management.","sidebar":"tutorialSidebar"},"guides/watch-mode":{"id":"guides/watch-mode","title":"Watch Mode","description":"Developers often find themselves in situations where they need to run a server in watch mode to streamline the development process. This guide will introduce you to [entr], a versatile file-watcher tool, and how to run your server in watch mode with it. We\'ll also touch on the installation process and suggest some best practices to optimize your workflow.","sidebar":"tutorialSidebar"},"operators/add-field":{"id":"operators/add-field","title":"@addField","description":"The @addField operator simplifies data structures and queries by adding a field that inline or flattens a nested field or node within your schema. It modifies the schema and the data transformation process, making nested data more accessible and straightforward to present.","sidebar":"tutorialSidebar"},"operators/cache":{"id":"operators/cache","title":"@cache","description":"The @cache directive provides a protocol agnostic mechanism for caching the results of fields within a GraphQL schema. Like any other cache implementation, this feature is useful for optimizing performance by reducing the need to fetch data that doesn\'t change frequently.","sidebar":"tutorialSidebar"},"operators/call":{"id":"operators/call","title":"@call","description":"Using the call directive to enhance GraphQL schemas improving code reusability.","sidebar":"tutorialSidebar"},"operators/const":{"id":"operators/const","title":"@const","description":"The @const directive in GraphQL is a powerful tool for embedding data directly into your schema, offering two primary functionalities:","sidebar":"tutorialSidebar"},"operators/graphql":{"id":"operators/graphql","title":"@graphQL","description":"The @graphQL operator allows to specify GraphQL API server request to fetch data from.","sidebar":"tutorialSidebar"},"operators/grpc":{"id":"operators/grpc","title":"@grpc","description":"The @grpc directive enables the resolution of GraphQL fields via gRPC services. Below is an illustrative example of how to apply this directive within a GraphQL schema:","sidebar":"tutorialSidebar"},"operators/http":{"id":"operators/http","title":"@http","description":"The @http operator indicates a field or node relies on a REST API. For example:","sidebar":"tutorialSidebar"},"operators/index":{"id":"operators/index","title":"Operators","description":"A list of all the custom operators supported by Tailcall.","sidebar":"tutorialSidebar"},"operators/link":{"id":"operators/link","title":"@link","description":"Discover how the @link operator can transform your GraphQL schema, enabling seamless integration of external resources like configurations, .proto files, and SSL/TLS certificates for enhanced functionality and security. Learn to streamline and secure your GraphQL configurations with our comprehensive guide.","sidebar":"tutorialSidebar"},"operators/modify":{"id":"operators/modify","title":"@modify","description":"The @modify operator in GraphQL provides the flexibility to alter the attributes of a field or a node within your GraphQL schema. Here\'s how you can use this operator:","sidebar":"tutorialSidebar"},"operators/omit":{"id":"operators/omit","title":"@omit","description":"Within a GraphQL schema, the @omit operator excludes fields or nodes from the generated schema, making them inaccessible through the GraphQL API. This operator is useful for hiding sensitive information or simplifying your API by removing unnecessary fields.","sidebar":"tutorialSidebar"},"operators/server":{"id":"operators/server","title":"@server","description":"The @server directive, applied at the schema level, provides a comprehensive set of server configurations. It dictates server behavior and helps tune Tailcall for a range of use-cases.","sidebar":"tutorialSidebar"},"operators/telemetry":{"id":"operators/telemetry","title":"@telemetry","description":"Integrate observability into your Tailcall services using @telemetry directive with OpenTelemetry.","sidebar":"tutorialSidebar"},"operators/upstream":{"id":"operators/upstream","title":"@upstream","description":"The upstream directive enables control over specific aspects of the upstream server connection, including settings such as connection timeouts, keep-alive intervals, and more. The system applies default values if you do not specify them.","sidebar":"tutorialSidebar"}}}')}}]);