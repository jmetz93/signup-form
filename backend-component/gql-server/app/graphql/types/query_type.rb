Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  
  field :people, !types[Type::PeopleType] do
    argument :email, !types.String
    description "Find a person by their email"
    resolve ->(obj, args, ctx) {
      Person.find_by(email: args[:email])
    }
  end
end
