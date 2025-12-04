import react from react

const ReminderItem = ({key, text, time, priority}) =>{
    classPriority = () => {
        if(priority === 'medium') return "bg-yellow-500"
        return "bg-green-500"
    }     
    return(
        <div key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer">
            <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Calendar className="text-blue-600" size={18} />
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 truncate">{text}</div>
                <div className="text-sm text-gray-500 flex items-center gap-1">
                <Clock size={12} />
                {time}
                </div>
            </div>
            <div className={`w-3 h-3 rounded-full ${classPriority}`}></div>
        </div>
    );
}