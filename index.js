class NoAliases {
    constructor(reporter, config) {
      this.ruleId = 'no-alias'
  
      this.reporter = reporter
      this.config = config
    }
  
    VariableDeclaration(ctx) {
        const { typeName } = ctx

        if (typeName.name === 'uint') {
            this.reporter.error(ctx, this.ruleId, 'avoid using aliases')
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
        const { parameters } = ctx

        if (parameters) {
            parameters.forEach((parameter) => {
                if (parameter.name.startsWith('_')) {
                    this.reporter.error(ctx, this.ruleId, 'paramater names cannot start with _')
                }

            })
        }
    }
}

class UndescoreOnPrivateInternalVar {
    constructor(reporter, config) {
        this.ruleId = 'underscore-on-private-internal-var'
    
        this.reporter = reporter
        this.config = config
    }

    StateVariableDeclaration(ctx) {
        const { variables } = ctx

        if (variables[0].visibility === 'internal' || variables[0].visibility === 'private') {
            if (!variables[0].name.startsWith('_')) {
                this.reporter.error(ctx, this.ruleId, 'internal and private variable names must start with _')
            }
        } else {
            if (variables[0].name.startsWith('_')) {
                this.reporter.error(ctx, this.ruleId, 'only internal and private variable names can start with _')
            }            
        }
    }
}

class UndescoreOnPrivateInternalFunc {
    constructor(reporter, config) {
        this.ruleId = 'underscore-on-private-internal-func'
    
        this.reporter = reporter
        this.config = config
    }

    FunctionDefinition(ctx) {
        const { visibility, name} = ctx;

        if (visibility === 'internal' || visibility === 'private') {
            if (!name.startsWith('_')) {
                this.reporter.error(ctx, this.ruleId, 'internal and private function names must start with _')
            }
        } else {
            if (name.startsWith('_')) {
                this.reporter.error(ctx, this.ruleId, 'only internal and private function  names can start with _')
            }
        }
    }
}

class StateVariableMustBePrivate {
    constructor(reporter, config) {
        this.ruleId = 'private-state-variable'
    
        this.reporter = reporter
        this.config = config
    }

    StateVariableDeclaration(ctx) {
        const { variables } = ctx

        if (variables[0].visibility != 'private') {
            this.reporter.error(ctx, this.ruleId, 'all state variables must be private')
        }
    }
}

class UnammedReturns {
    constructor(reporter, config) {
        this.ruleId = 'unammed-returns'
    
        this.reporter = reporter
        this.config = config
    } 

    FunctionDefinition(ctx) {
        const { returnParameters } = ctx

        if (returnParameters) {
            returnParameters.forEach((parameter) => {
                if (parameter.name != null) {
                    this.reporter.error(ctx, this.ruleId, 'return parameters must be unammed')
                }
            })
        }
    }
}

class InterfaceNames {
    constructor(reporter, config) {
        this.ruleId = 'interface-names'
    
        this.reporter = reporter
        this.config = config
    }

    ContractDefinition(ctx) {
        const { kind, name} = ctx

        if (kind === 'interface') {
            if (!name.startsWith('I')) {
                this.reporter.error(ctx, this.ruleId, 'interface names must start with I')
            }
        } else {
            if (name.startsWith('I') || name.startsWith('i')) {
                this.reporter.error(ctx, this.ruleId, 'only interface names can start with I')
            }
        }
    }
}

module.exports = [NoAliases, NoUnderscoreParams, UndescoreOnPrivateInternalVar, UndescoreOnPrivateInternalFunc, StateVariableMustBePrivate, UnammedReturns, InterfaceNames]