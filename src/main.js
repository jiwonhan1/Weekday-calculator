import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DayOfWeek } from './scripts';

$(document).ready(function(){
    $("form").submit(function(event){
    event.preventDefault();
    let newDayOfWeek = new DayOfWeek();
    newDayOfWeek.year = $("#year").val();
    newDayOfWeek.month = $("#month").val();
    newDayOfWeek.day= $("#day").val();

    let formula = newDayOfWeek.calculateDate();

    $("p").text(formula)


});
});