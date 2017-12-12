import Immutable from 'immutable';
import Iflux, {msg, Store, connectToStore} from 'iflux';
var appStore=Store({
      thead:["姓名","密码","毕业学校","操作"],
      tableList:[{name:"zyf",password:"123321",school:"南京晓庄学院",operate_add:"增加",operate_modify:"修改",operate_delete:"删除"},
                {name:"zx",password:"111111",school:"常熟理工学院",operate_add:"增加",operate_modify:"修改",operate_delete:"删除"},
                {name:"zyf",password:"123321",school:"中国农科院",operate_add:"增加",operate_modify:"修改",operate_delete:"删除"},
                {name:"zyf",password:"123321",school:"江南大学",operate_add:"增加",operate_modify:"修改",operate_delete:"删除"}],
      clickId:""
});
/*export  default appStore;
msg.on('Table:showTale',showTale);*/

/*/!*功能，展示table列表*!/
function showTale() {
    let title=appStore.data().thead;
    let data=appStore.data().tableList;
    let taList=Immutable.fromJS(data);
    if(title!=null){
        appStore.cursor().set()
    }

    if(data!=null){
        data.tableList.map(function (key,index) {
            
        })
    }
}*/

        /*修改信息*/

        /*删除信息*/
