import User from '../User/User';

export default function UsersList({users, deleteUsers, editUsers}) {
    return (
            <>
                {users.map((user) => (
                            <User   key={user.id}
                                    user={user}
                                    deleteUsers={deleteUsers}
                                    editUsers={editUsers}
                            />
                        )
                    )
                }
            </>
        )
}