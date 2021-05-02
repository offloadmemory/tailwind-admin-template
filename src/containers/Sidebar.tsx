import {
    HomeIcon, CollectionIcon, DuplicateIcon, FolderIcon, CursorClickIcon, ChartSquareBarIcon, ViewListIcon,
    ShoppingBagIcon
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

function Sidebar() {
    const items = [{
        title: 'Dashboard',
        icon: <HomeIcon className="w-6 h-6" />,
        route: "/app/dashboard"
    }, {
        title: 'Forms',
        icon: <FolderIcon className="w-6 h-6" />,
        route: "/app/forms"
    }, {
        title: 'Cards',
        icon: <CollectionIcon className="w-6 h-6" />,
        route: "/app/cards"
    }, {
        title: 'Charts',
        icon: <ChartSquareBarIcon className="w-6 h-6" />,
        route: "/app/charts"
    }, {
        title: 'Buttons',
        icon: <CursorClickIcon className="w-6 h-6" />,
        route: "/app/buttons"
    }, {
        title: 'Modals',
        icon: <DuplicateIcon className="w-6 h-6" />,
        route: "/app/modals"
    }, {
        title: 'Tables',
        icon: <ViewListIcon className="w-6 h-6" />,
        route: "/app/tables"
    },
    {
        title: 'Widgets',
        icon: <ShoppingBagIcon className="w-6 h-6" />,
        route: "/app/widgets"
    }];

    return (
        <section className="flex flex-col w-60 bg-gray-50 p-2">
            <div className="text-lg font-semibold px-6">TW Admin</div>
            <div className="flex flex-col space-y-6 p-4">
                {items.map((item, idx) => (
                    <Link
                        className={`
                            flex flex-row space-x-4 px-3 py-2 
                            hover:bg-indigo-500 hover:text-white
                        `}
                        key={idx}
                        to={item.route}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Sidebar;