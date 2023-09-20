import { AiFillHome } from 'react-icons/ai'
import { FaAddressBook, FaUserEdit } from 'react-icons/fa'
import { GiBurningBook } from 'react-icons/gi'

export const navigation = [
    {
        key: 'home',
        image: <AiFillHome />
    },
    {
        key: 'about',
        image: <FaUserEdit />
    },
    {
        key: 'skills',
        image: <GiBurningBook />
    },
    {
        key: 'portfolio',
        image: <FaAddressBook />
    }
]