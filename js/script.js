document.getElementById("sidebar-wrapper").innerHTML =
'<ul class="sidebar-nav">'+
    '<li class="sidebar-brand">'+
        '<a href="index.html">'+
            'Home'+
        '</a>'+
    '</li>'+
    '<li class="dropdown">'+
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Sorting<span class="caret"></span></a>'+
        '<ul class="dropdown-menu" role="menu">'+
            '<li><a href="insertion_sort.html">Insertion Sort</a></li>'+
            '<li><a href="merge_sort.html">Merge Sort</a></li>'+
            '<li><a href="selection_sort.html">Selection Sort</a></li>'+
            '<li><a href="bubble_sort.html">Bubble Sort</a></li>'+
            '<li><a href="quick_sort.html">Quick Sort</a></li>'+
        '</ul>'+
    '</li>'+
    '</li>'+
    '<li class="dropdown">'+
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown">C++ STL<span class="caret"></span></a>'+
        '<ul class="dropdown-menu" role="menu">'+
            '<li><a href="vector.html">Vector</a></li>'+
        '</ul>'+
    '</li>'+
    '<li>'+
        '<a href="acknowledgement.html">Acknowledgement</a>'+
    '</li>'+
'</ul>';