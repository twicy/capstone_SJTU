# README for Backend

## 使用说明

假设已经装好了go并且配置好了GOROOT, GOPATH

**安装所有载入的包** 

`go mod install`

**运行程序**  
`cd awesome_app`  
`go run .`

## 代码说明
**操作sql**  
* 在`awersome_app/sql.go` 的 `InitSQL()` 里修改如下代码 `SQLDB, err = sql.Open("mysql", "{username}:{password}@/{databasename}")`

**增加新内容**
* 在`awersome_app/model.go`中加上新的struct