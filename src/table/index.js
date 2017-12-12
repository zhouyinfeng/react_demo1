import React, {Component} from "react";
import appStore from "./store";
import  {msg, Store, connectToStore} from 'iflux';
class  Table extends  Comment{
    /*初始化信息 componentDidMount*/
    componentDidMount(){
        msg.emit('Table:showTale');
    }
/*var Table=*/

    render(){
        let that=this;
        let tableList=appStore.data().get('tableList');
        let tableTitle=appStore.data().get('thead');
        return(
        <div className="table">
        <table>
            <thead>
            <tr>{tableTitle.map(function (name,index) {
                {
                    return(
                        <td>name</td>
                    )
                }
            })}
            </tr>
            </thead>
            <tbody>
            {
                tableList.map(function (name,index) {
                    return(
                   <tr id={index}>
                       <td>
                           {name.get("name")}
                       </td>
                       <td>
                           {name.get("password")}
                       </td>
                       <td>
                           {name.get("school")}
                       </td>
                       <td>
                           {name.get("operate_add")}
                       </td>
                       <td>
                           {name.get("operate_modify")}
                       </td>
                       <td>
                           {name.get("operate_delete")}
                       </td>
                   </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
        )
    }
}
export default connectToStore(appStore,true)(Table)