# Cloud-Ferment
A project to generate AWS CloudFormation Templates with TypeScript.


## Example Usage

```javascript
import { CloudformationTemplate, Ref, S3 } from 'cloud-ferment';

let template:CloudFormationTemplate = new CloudFormationTemplate("Template Description Here");

let myBucket = new S3.Bucket("myBucket",{
    BucketName:"AUniqueBucketName",
    VersioningConfiguration:{
        Status:"Enabled"
    }
})

template.addResource(myBucket);

template.addOutput({
    Description:"A reference to my S3 bucket",
    Name:"MyBucketReference",
    Value:Ref(myBucket),
    ExportName:"MyBucketReference"
})

console.log(JSON.stringify(template.templateOutput(),null,2));
````

This will produce the following CloudFormation Template

```
{
  "Description": "Template Description Here",
  "Parameters": {},
  "Mappings": {},
  "Resources": {
    "myBucket": {
      "Type": "AWS::S3::Bucket",
      "Properties": {
        "BucketName": "AUniqueBucketName",
        "VersioningConfiguration": {
          "Status": "Enabled"
        }
      }
    }
  },
  "Outputs": {
    "MyBucketReference": {
      "Description": "A reference to my S3 bucket",
      "Value": {
        "Ref": "myBucket"
      },
      "Export": {
        "Name": "MyBucketReference"
      }
    }
  }
}
```