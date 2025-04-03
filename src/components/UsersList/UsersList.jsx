import User from '../User/User';

export default function UsersList({users, deleteUsers}) {
    return (
            <>
                {users.map((user) => (
                            <User   key={user.id}
                                    user={user}
                                    deleteUsers={deleteUsers}
                            />
                        )
                    )
                }
            </>
        )
}