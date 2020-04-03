class NoFoosAllowed {
    constructor(reporter, config) {
      this.ruleId = 'no-foos'
  
      this.reporter = reporter
      this.config = config
    }
  
    ContractDefinition(ctx) {
      const { name } = ctx
  
      if (name === 'Foo') {
        this.reporter.error(ctx, this.ruleId, 'Contracts cannot be named "Foo"')
      }
    }
}

class NoUnderscoreParams {
    constructor(reporter, config) {
        this.ruleId = 'no-underscore-params'
    
        this.reporter = reporter
        this.config = config
    }

    FunctionDefinition(ctx) {
        const { parameters } = ctx;

        if (parameters) {
            parameters.forEach((parameter) => {
                if (parameter.name.startsWith('_')) {
                    this.reporter.error(ctx, this.ruleId, 'paramater names cannot start with _')
                }

            })
        }
    }
}