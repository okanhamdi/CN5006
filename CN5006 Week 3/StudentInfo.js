const dateofBirth= "12/12/1980"

const getStudentName = () =>
{
    return "Write your Name here"
}
const getCampusName = () =>
{
    return ("UEL Campus ")
}

//exporting functions and variables outsite the module
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob=dateofBirth

//how to export functions with parameters
exports.Studentgrade=(marks)=>
{
    if (marks>50 && marks < 70) return ("Grade B")
        else
            return ("Grade A")
}