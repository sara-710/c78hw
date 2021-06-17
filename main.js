var images = ["https://pngtree.com/freepng/illustration-of-hand-painted-family-members_3692495.html",
    "https://pngtree.com/freepng/fashion-teenager-pattern-element-design_4084237.html",
    "https://pngtree.com/freepng/father_5622295.html",
    "https://pngtree.com/freepng/chibi-boy-with-glasses_3782196.html",
    "https://pngtree.com/freepng/cooking-mom_5634813.html",
    "https://pngtree.com/freepng/pink-baby-girl_5502576.html"
]
var name = ["Family book", "Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Soni Singh", "Alia Singh"]

vari = 0;

function update() {

    i++;
    var numbers_of_family_members_in_array = 5
    if (i > numbers_of_family_members_in_array) {
        i = 0
    }
    var updatedimage = images[i];
    var updatedname = names[i];
    document.getElementById("family_member_image").src = updatedimage;
    document.getElementById("family_mem_name").innerHTML = updatedname;
}