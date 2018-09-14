Types::PersonType = GraphQL::ObjectType.define do
  name 'People'

  field :id, !types.ID
  field :firstname, !types.String
  field :lastname, !types.String
  field :password !types.String
  field :email !types.String
  field :interest !types.String
  field :phone !types.Integer
end