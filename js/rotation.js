AFRAME.registerComponent("player-movement",{

    init: function(){
        window.addEventListener("keydown",(e)=>{
            var Playerposition=this.el.getAttribute("position")
            if(e.key === "ArrowRight"){
                Playerposition +=0.01
                this.el.setAttribute("position",Playerposition)
            }
            if(e.key === "ArrowLeft"){
                Playerposition -=0.01
                this.el.setAttribute("position",Playerposition)
            }
        })
    },
})