

export default function FormatDate({dateData, fullDate}){
    let formattedDate = new Date( dateData * 1000);
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

    let day = formattedDate.getDay();
    let date = formattedDate.getDate();
    let month = formattedDate.getMonth();
    let year = formattedDate.getFullYear();

    let hours = formattedDate.getHours();
    let minutes = formattedDate.getMinutes();

    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (hours < 10){
        hours = "0" + hours;
    }
    if(hours<12){
        minutes+= " AM";
    }
    else {
        minutes+= " PM";
    }
    if (date < 10){
        date = "0" + date;
    }
    if(fullDate){
    return <span>
        <p id="current-time">{hours}:{minutes},</p>
        <p id="current-date">{dayNames[day]}, {date}/{monthNames[month]}/{year}</p>
    </span>;
    }
    else {
        return `${date} ${monthNames[month]}` ;
    }

}