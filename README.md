# Cloud-Ferment
A project to generate AWS CloudFormation Templates with TypeScript. The classes and interfaces for AWS services are automatically generated from [Amazon's Resource Specification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-resource-specification.html) (currently us-east-1)


## Example Usage

This code does the following

* Imports from cloud-ferment
* Creates a new CloudFormationTemplate object
* Adds a template parameter
* Creates a new S3.Bucket Object, and adds it to the template
* Adds a stack output
* Outputs the template to the console

```javascript
import { CloudFormationTemplate, Ref, S3 } from 'cloud-ferment';

let template:CloudFormationTemplate = new CloudFormationTemplate("Template Description Here");

template.addParameter({
    Type:"String",
    Description:"A unique name for my bucket",
    Name:"UniqueBucketName"
})

let myBucket = new S3.Bucket("MyBucket",{
    BucketName:Ref("UniqueBucketName"),
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

This will produce the following CloudFormation Template, which you can then deploy to AWS via the CloudFormation API or Console.

```
{
  "Description": "Template Description Here",
  "Parameters": {
    "UniqueBucketName": {
      "Type": "String",
      "Description": "A unique name for my bucket"
    }
  },
  "Mappings": {},
  "Resources": {
    "myBucket": {
      "Type": "AWS::S3::Bucket",
      "Properties": {
        "BucketName": {
          "Ref": "UniqueBucketName"
        },
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