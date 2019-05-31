import { Resolver ,Query } from "@nestjs/graphql";

@Resolver('User')
export class UserResolver {
    @Query()
    async users() {
        return [{
            id: 'id',
            name: 'name'
        }]
    }
}